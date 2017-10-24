module.exports = function () {
    const sphere = {
        evaluationCriterion: [
            { id: 1, checked: true, description: "Financial Evaluation aaaa" },
            { id: 2, checked: false, description: "National Economic Evaluation" }
        ],
        evaluationSystem: [
            { id: 1, checked: true, description: "New Product" },
            { id: 2, checked: false, description: "Reorganization" },
            { id: 3, checked: false, description: "Cooperation" }
        ]
    };

    const duration = {
        period: 20,
        startingYear: 0,
        startupYear: 0,
        normalYear: 0,
        reinvest: false
    };

    const products = [
        { id: 1, category: "", name: "Product 101", output: null, price: null}
    ];

    const valueObject = {
        sphere: sphere,
        duration: duration,
    };

    let entity = {
        products: products,
        sphere: { evaluationCriterion: "", evaluationSystem: ""},
        duration: {
            period: 20,
            startingYear: 0,
            startupYear: 0,
            normalYear: 0,
            reinvest: false
        }
    };

    let data = [
        {
            scope: 1,
            valueObject: valueObject,
            entity: entity
        }
    ];

    return data
}