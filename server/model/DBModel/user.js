module.exports = {
    TableName: "user",
    TableModel: {
        name: {
            type: "String",
            required: true,
            toLString: "name"
        },
        password: {
            type: "String",
            required: true,
            toLString: "password"
        },
        age: {
            type: "Number",
            toLString: "age"
        },
        address: {
            type: "String",
            toLString: "address"
        },
        city: {
            type: "String",
            toLString: "city"
        },
        company: {
            type: "String",
            toLString: "company"
        },
        friends: {
            type: "Array",
            toLString: "friends"
        }
    }
};
