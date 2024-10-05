function checkAge(){
    console.log('button clicked')

    const ageField = document.getElementById('age');
    const ageText = ageField.value;

    const errorTag = document.getElementById('error');


    
    try{
        // console.log(bBaria)
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('Age not found', age, ageText)
            throw 'Please enter a numberrrr'// string number boolean object sob throw korte pari.. ekhane string throw korechi
        }
        else if(age < 18){
            throw 'Bacchara dure thako'
        }
        else if(age > 30){
            throw "Murubbi ra aishen na"
        }
        errorTag.innerHTML = ''

    }
    catch(err){
        console.log('Errorrr:', err)// the value of err is "Please enter a number", this value get from the throw
        errorTag.innerHTML = 'Something Wrong: ' + err
    }
    finally{
        console.log('All done try catch')//try ba catch jetai execute hok na keno finally excute hobei
    }
    console.log(11111)

}