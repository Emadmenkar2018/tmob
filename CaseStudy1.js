function normalize(applicationData) {
    let expected = {}

    let attrs = Object.keys(applicationData)
    attrs.map(item => {
        if (applicationData[item].value instanceof Array) {
            let subValues = []
            applicationData[item].value.map(subItem => {
                let subAttrs = Object.keys(subItem)
                let subObject = {}
                subAttrs.map(subSubItem => {
                    subObject[subSubItem] = subItem[subSubItem].value
                })
                subValues.push(subObject)
                expected[item] = subValues
            })
        }
        else {
            expected[item] = applicationData[item].value
        }
    })
    return expected
}