import employeeData from "./employeeData";

export default{ 
    getUsers:function(){    

        return employeeData;
    },


    filterUsers:function(searchedText) {
        return employeeData.filter(data => 

            // non-case sensitive search entries
            data.name.first === searchedText[0].toUpperCase() + searchedText.slice(1)
           
        )
    },

    sortedUsers:function(sortKey) {
        let newEmpArr;

        if (sortKey === "Name") {
            newEmpArr = employeeData.sort(function(a, b){
                if (a.name.first.toUpperCase() > b.name.first.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })
    
            return newEmpArr;
        }

        if (sortKey === "Location") {
            // implement sort by location
            newEmpArr = employeeData.sort(function(a, b){
                if (a.location.state.toUpperCase() > b.location.state.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })

            return newEmpArr;
        }
        
    }
};