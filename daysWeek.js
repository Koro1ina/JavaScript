function changingLanguage(str, oldDayWeek, newDayWeek){
let newSTR = str.replace(oldDayWeek, newDayWeek);
return newSTR;

}
let text = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье`;
let russiaDaysWeek = [/ПОНЕДЕЛЬНИК/gi, /ВТОРНИК/gi,  /СРЕДА/gi,  /ЧЕТВЕРГ/gi,  /ПЯТНИЦА/gi,  /СУББОТА/gi,  /ВОСКРЕСЕНЬЕ/gi];
let englishDaysWeek = [ "MONDAY", "Tuesday", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY" ];
for (let i = 0; i < russiaDaysWeek.length; i++){

text = changingLanguage(text, russiaDaysWeek[i], englishDaysWeek[i]);

}

console.log(text);