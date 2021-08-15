const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

   const scoresGreaterThan85 = (users) => {
       const scores85 = users.filter((item,index) => item.scores > 85);
       console.log(scores85);
   };
   scoresGreaterThan85(users);



function addUser(user) {
	var index = users.findIndex(x => x.name == user.name)
	if (index === -1){
		users.push(user);
	}else {
		console.log("user already exists")
	}
}
var user = {name:"neha",scores:90,skills:['HTM', 'CSS', 'JS'],age:20};
addUser(user);
console.log(users);