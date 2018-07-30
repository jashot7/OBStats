/*
  StatsDisplay is a container representing the 'main' page/view/route of the stats. This is the
  general overview of stats.

  A 'Container' is a regular React Component that gets bound to the application state. A component
  becomes a container when we wish to touch the redux state directly.

  Making a container consists of the following steps:
    1. Import connect
    2. Define mapStateToProps
    3. Hook them together with connect.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './stats-display.css';
import {
  getStatsListingsNSFW_Thunk,
  getStatsListingsCondition,
  getStatsListingsType,
  getStatsListingsSymbol,
  getStatsListingsTotals,
  getStatsProfilesSymbol,
  getStatsVendorsSymbol
} from '../../actions';
import { bindActionCreators } from 'redux';
import PlaceholderStats from '../../components/placeholder-stats/placeholder-stats';
import ObPieChart from '../../components/ob-pie-chart/ob-pie-chart';
import PresentationalComponent from '../../components/presentational-component/presentational-component';
import StatsSummaryComponent from '../../components/stats-summary-component/stats-summary-component';

class StatsDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalListings: 0
    };
  }

  componentWillMount() {
    this.props.getStatsListingsNSFW_Thunk();
    this.props.getStatsListingsCondition();
    this.props.getStatsListingsType();
    this.props.getStatsListingsSymbol();
    this.props.getStatsListingsTotals();
    this.props.getStatsProfilesSymbol();
    this.props.getStatsVendorsSymbol();
  }

  getNsfwStats() {
    return {
      labels: ['sfw', 'nsfw'],
      series: [this.props.stats.sfw, this.props.stats.nsfw]
    };
  }

  getConditionStats() {
    return this.makeChartData(this.props.condition, ['used']);
  }

  getListingsByType() {
    return this.makeChartData(this.props.listingByType, ['cryptocurrency']);
  }

  getListingsBySymbols() {
    return this.makeChartData(this.props.listingBySymbols);
  }

  getProfilesBySymbols() {
    return this.makeChartData(this.props.profilesBySymbols);
  }

  getVendorsBySymbols() {
    return this.makeChartData(this.props.vendorsBySymbols);
  }

  makeChartData(dataObj, exclusions = []) {
    if (dataObj != null) {
      var labels = [];
      var series = [];

      for (const key in dataObj) {
        if (!key || exclusions.indexOf(key) > -1) {
          continue;
        } else {
          const value = dataObj[key];
          labels.push(`${key} (${value})`);
          series.push(dataObj[key]);
        }
      }

      return { labels, series };
    }
  }

  getSummaryData() {
    // Compute totals
    let totalProfiles = this.getTotal(this.props.profilesBySymbols);
    let totalVendors = this.getTotal(this.props.vendorsBySymbols);

    const totalListings = this.props.listingTotals;
    return { totalListings, totalProfiles, totalVendors };
  }

  getTotal(obj) {
    let total;
    if (obj != null) {
      total = 0;
      for (const key in obj) {
        total += obj[key];
      }
    }

    return total;
  }

  render() {
    if (this.props.stats == null) {
      return (
        <div className="stats-container">
          <h1 className="stats-title center fnt-accent1 fnt-larger neontext5">
            Loading...
          </h1>
        </div>
      );
    } else {
      return (
        <div className="stats-container clr-bg-bg1">
          <StatsSummaryComponent
            totalListings={this.getSummaryData().totalListings}
            totalMerchants={this.getSummaryData().totalProfiles}
            totalVendors={this.getSummaryData().totalVendors}
          />
          <div className="flex row-unless-mobile wrap">
            <ObPieChart title={'NSFW vs. SFW'} data={this.getNsfwStats()} />
            <ObPieChart
              title={'Listings by Condition'}
              data={this.getConditionStats()}
            />
            <ObPieChart
              title={'LISTINGS BY TYPE'}
              data={this.getListingsByType()}
            />
            <ObPieChart
              title={'Listings by Symbols'}
              data={this.getListingsBySymbols()}
            />
            <ObPieChart
              title={'Profiles by Symbols'}
              data={this.getProfilesBySymbols()}
            />
            <ObPieChart
              title={'Vendors by Symbols '}
              data={this.getVendorsBySymbols()}
            />
          </div>
        </div>
      );
    }
  }
}

/**
 * This returns what will show up in props in render from what's in the application state.
 */
function mapStateToProps({
  stats,
  condition,
  listingByType,
  listingBySymbols,
  listingTotals,
  profilesBySymbols,
  vendorsBySymbols
}) {
  return {
    stats,
    condition,
    listingByType,
    listingBySymbols,
    listingTotals,
    profilesBySymbols,
    vendorsBySymbols
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getStatsListingsNSFW_Thunk,
      getStatsListingsCondition,
      getStatsListingsType,
      getStatsListingsSymbol,
      getStatsListingsTotals,
      getStatsProfilesSymbol,
      getStatsVendorsSymbol
    },
    dispatch
  );
}

/*
* We want to export the container rather than the component. This promotes StatsDisplay from
a React Component to a Redux Container. This connects redux props to the application state along
with connecting redux actions so that they're available in props.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsDisplay);
