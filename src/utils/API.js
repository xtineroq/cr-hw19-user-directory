import employeeData from "./employeeData";

export default{ 
    getUsers:function(){    

        return employeeData;
    },

    filterUsers:function(searchedText){
        return employeeData.filter(data =>
            data.name.first === searchedText
        )
    },

    // sortUsers:function(sortedData){
    //     return employeeData;
    // }
};