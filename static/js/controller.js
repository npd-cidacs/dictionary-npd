var values = new Array();
            var list_nCat = new Array();
            var list_nCat_ = new Array();

            var categories = function(x,y) {
                var result = '';
                
                $(x).each(function() {
                    
                    if ($(this).val()) {
                        list_nCat_.push($(this).val());
                    }                   
                });
                $(y).each(function() {
                    if ($(this).val()) {
                        list_nCat.push($(this).val());                        
                    }    
                });
                for (var index = 0; index < list_nCat.length; index++) {
                    result = result.concat(String("'"+list_nCat_[index]+"' : '"+list_nCat[index]+"',")); 
                }
                list_nCat.length = 0 //clear
                list_nCat_.length = 0 //clear
                
                return result;
            }
            $("button").click(function(e){ 
                var idClicked = e.target.id;
                if(idClicked == 'add'){
                    if(document.getElementById("nameVariable").value == ""){
                        alert("Please, fill in the variable's name");
                        document.getElementById("nameVariable").focus();
                        return false
                    }else{
                        var value = 
                        "{"+
                            '"variable": "'+String($('#nameVariable').val()+'" ,')+
                            '"type": "'+String($('#type').val() +'" ,') +
                            '"comment": "'+String($('#comment').val().replace(',', ' ') +'" ,') +
                            '"description": "'+String($('#description').val().replace(',', ' ') +'" ,') +
                            '"categories_std":  {'+ categories('.originalValue','.standardizeValue') + "}," +
                            '"categories": {'+ categories('.standardizeValue','.nameCategory')  + "}}-" 
                            // console.log(categories('.originalValue','.nameCategory') );
                    }
            values.push(value)
            $("#comment").val(""); 
            $('#nameVariable').val('');
            $('#description').val('');
            $('.originalValue').val('');
            $('.standardizeValue').val('');
            $('.nameCategory').val('');
            $('#nameVariable').focus();
            $("#result").val(values);
            alert("Compiled successfully!");
            }
        });