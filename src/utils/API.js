import employeeData from "./employeeData";

export default{ 
    getUsers:function(){    

        return employeeData;
    },

    // search by first name
    filterUsers:function(searchedText) {
        
        return employeeData.filter(data => 

            // non-case sensitive search entries
            data.name.first === searchedText[0].toUpperCase() + searchedText.slice(1)
           
        )
    },

    sortUsers:function(sortKey) {
        let newEmpArr;

        // Sort by first name
        if (sortKey === "firstName") {
            newEmpArr = employeeData.sort(function(a, b){
                if (a.name.first.toUpperCase() > b.name.first.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })
    
            return newEmpArr;
        }

        // sort by last name
        if (sortKey === "lastName") {
            newEmpArr = employeeData.sort(function(a, b){
                if (a.name.last.toUpperCase() > b.name.last.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })
    
            return newEmpArr;
        }

        // sort by location
        if (sortKey === "location") {
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