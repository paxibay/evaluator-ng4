const application = require('./application.js');
const dashboard = require('./dashboard.js');
const blueprint = require('./blueprint.js');
const depreciation = require('./depreciation.js');
const funds = require('./funds.js');
const cost = require('./cost.js');
const invest = require('./invest.js');
const liquidity = require('./liquidity.js');
const revenue = require('./revenue.js');

module.exports = function () {
    var data = {
        application: application(),
        dashboard: dashboard(),
        blueprint: blueprint(),
        depreciation: depreciation(),
        funds: funds(),
        cost: cost(),
        invest: invest(),
        liquidity: liquidity(),
        revenue: revenue(),
    }
    return data
}
