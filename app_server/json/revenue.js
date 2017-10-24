module.exports = function () {
    // Value Object
    const taxOption = {
        unitOptions: ["unit01", "unit02", "unit03", "unit04"],
        ruleOptions: ["rule01", "rule02", "rule03", "rule04"],
    }
    // Value Object
    const taxTypes = {
        default: [],
        customer: [],
        taxes: [
            {
                id: 1,
                name: "城市维护建设税",
                rate: 5,
                unit: "%",
                basedOn: "增值税",
                marked: true,
            },
            {
                id: 2,
                name: "教育费附加",
                rate: 3,
                unit: "%",
                basedOn: "增值税",
                marked: true,
            },
            {
                id: 1,
                name: "资源税",
                rate: 1.2,
                unit: "￥",
                basedOn: "销售量",
                marked: true,
            },
            {
                id: 1,
                name: "other",
                rate: 1.2,
                unit: "——",
                basedOn: "其他",
                marked: false}
        ]

    }

    const valueObject = {
        taxOption: taxOption,
        taxTypes: taxTypes
    };
    
        
    const entity = {
        name: "revenueName",
        taxMode: "Separate", //Composite Separate
        projectRevenue: [
            {
                taxid: 1,
                productId: 1,
                name: "name",
                valueAddedTax: {
                    industry: "industry",
                    inputValue: 11,
                    outputValue: 14,
                    description: "description"
                },
                taxes: null
            }
        ]
    };

    var data = {
        valueObject: valueObject,
        entity: entity
    };
    return data
}