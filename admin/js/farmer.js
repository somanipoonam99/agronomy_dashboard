<script type="text/java script>
 var name=[];
var phone=[];
var address=[];
var city=[];
var state=[];
var zip=[];
var n=1;
var x=0;
function AddRow()
{
 var AddRown = document.getElementById('farmer');
  var NewRow=AddRown.insertRow(n);
  
name[x]=document.getElementById('name');

phone[x]=document.getElementById('num');

address[x]=document.getElementById('address');

city[x]=document.getElementById('city');

state[x]=document.getElementById('state');
zip[x]=document.getElementById('zip');
var cel0=new NewRow.insertcell(0)+1;
var cel1=new NewRow.insertcell(1);
var cel2=new NewRow.insertcell(2);
var cel3=new NewRow.insertcell(3);
var cel4=new NewRow.insertcell(4);
var cel5=new NewRow.insertcell(5);

cel1.innerHTML=name[x];
cel2.innerHTML=phone[x];
cel3.innerHTML=address[x];
cel4.innerHTML=city[x];
cel5.innerHTML=state[x];
cel6.innerHTML=zip[x];

n++;
x++;

}

</script>