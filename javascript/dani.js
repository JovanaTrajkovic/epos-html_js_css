
function danIsporuke(){
    var isporuka = new Date();
    var trajanje = 5; //u danima
    isporuka.setTime(isporuka.getTime() +  (trajanje * 24 * 60 * 60 * 1000)); //dodajemo vreme u sekundama na trenutno vreme
    var dan= isporuka.getDate();
    var mesec= isporuka.getMonth()+1;
    var godina= isporuka.getUTCFullYear();

   document.write(dan+"."+mesec+"."+godina+".");
}