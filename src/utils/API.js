import employeeData from "./employeeData";

export default{ 
    getUsers:function(){    

        return employeeData;
    },

    filterUsers:function(searchedText){
        return employeeData.filter(data => {

            return data.name.first[0].toUpperCase() + data.name.first.slice(1) === searchedText;

            // console.log(fName);
            // console.log(searchedText);
            // console.log(fName === searchedText);

            // return fName === searchedText
        }
           
        )
    },

};