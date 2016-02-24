
//supplied data
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
//end supplied data

//new employee array
var newEmp = [];
//looping through employees array
for(var i = 0; i < employees.length; i++){
	var empName = employees[i][0];
	var sti = bonusPercCalc(employees[i]);
	var bonus = parseInt(totalBonusCalc(sti));
	var totalAnnual = parseInt(employees[i][2]) + bonus; 

	newEmp.push([empName, sti , totalAnnual	, bonus]);
	console.log(newEmp[i]);

	// console.log(newEmp);

}
//calculates bonus percentage 
function bonusPercCalc(emp){
	var empSTI = [];
	var bonusPerc;
	//setting base bonus percentages
	switch(emp[3]){
		case 2:
			bonusPerc = 0.0;
			break;
		case 3: 
			bonusPerc = .04;
			break;
		case 4:
			bonusPerc = .06;
			break;
		case 5: 
			bonusPerc = .10;
			break;
		default:
			bonusPerc = .0;
			break;			
	}
	//employee id bonus percentage mod
	if(emp[1].length <= 4){
		bonusPerc += .05;
	}
	//bonus percentage max salary deduction
	if(emp[2] > 65000){
		bonusPerc -= .01;
	}
	//bonus percentage cap
	if(bonusPerc > .13){
		bonusPerc = .13;
	}
	// console.log(bonusPerc);
	return bonusPerc;
}

function totalBonusCalc(empSTI){
	var totalBonus = employees[i][2] * empSTI;
	// console.log(totalBonus);
	return totalBonus;
}