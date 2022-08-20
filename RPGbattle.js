const readlineSync = require('readline-sync');


const monster = {
        maxHealth: 10,
        name: "Лютый",
        moves: [
            {
                "name": "Удар когтистой лапой",
                "physicalDmg": 3, // физический урон
                "magicDmg": 0,    // магический урон
                "physicArmorPercents": 20, // физическая броня
                "magicArmorPercents": 20,  // магическая броня
                "cooldown": 0     // ходов на восстановление
            },
            {
                "name": "Огненное дыхание",
                "physicalDmg": 0,
                "magicDmg": 4,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3
            },
            {
                "name": "Удар хвостом",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 50,
                "magicArmorPercents": 0,
                "cooldown": 2
            },
        ]
    };

const moves = {
    maxHealth: 10,
    name: "Евстафий",
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
};

function start() {
    let level; // уровень сложности
    let health; // здоровье
//откат навыков
    let monsterCooldown1 = 0;  
    let monsterCooldown2 = 0;   
    let movesCooldown0 = 0;     
    let movesCooldown1 = 0;    
    let movesCooldown2 = 0;     

// выбираем уровень сложности
	
	while (level!=1 && level!=2){
           console.log('Now the difficulty level is easy: 10 health. Do you want to change the difficulty level?\n1. Yes\n2. No');
           level = readlineSync.question('Your choice: ');
           level = parseInt(level);
	}

	if (level==1){
		console.log('Выберите уровень: \n1. Average (50 health) \n2. Difficult (100 health)');
		level = readlineSync.question('Your choice: ');
    		level = parseInt(level);

	if (level==1){
	   monster.maxHealth=50;
	   moves.maxHealth=50;
	}else if (level==2){
	   monster.maxHealth=100;
	   moves.maxHealth=50;
	}
}


//игра продолжается до тех пор пока здоровье противника и игрока больше 0

 while (monster.maxHealth > 0 && moves.maxHealth > 0) {
        let random;
        let hit;

  // ход противника
      
        do {
            random = Math.floor(Math.random() * 2) + 0;
            
        } while ((random == 1 && monsterCooldown1 > 0 && monsterCooldown1 < 3) || (random == 2 && monsterCooldown2 > 0 && monsterCooldown2 < 2));

// откат навыка противника

	if ((monsterCooldown1 > 0 && monsterCooldown1 < 3) || (monsterCooldown1==0)){
            monsterCooldown1++;
        } else if (monsterCooldown1 == 3) {
            monsterCooldown1 = 0;
        } 

        if ((monsterCooldown2 > 0 && monsterCooldown2 < 3) || (monsterCooldown2==0)){
            monsterCooldown2++;
        } else if (monsterCooldown2 == 3) {
            monsterCooldown2 = 0;
        } 
  
// выбор действия игроком

        console.log('\n\nДействие Противника: ' + monster.moves[random].name);

        console.log('\nВаш ход:\n1. Удар боевым кадилом;\n2. Вертушка левой пяткой;\n3. Каноничный фаербол;\n4. Магический блок.');

        hit = readlineSync.question('--> ');
        hit = parseInt(hit);
	
 // если игрок выбирает навык, котрые ещё не востановился.
       
        while ((hit == 2 && movesCooldown0 > 0 && movesCooldown0 < 4) || (hit == 3 && movesCooldown1 > 0 && movesCooldown1 < 3) || (hit == 4 && movesCooldown2 > 0 && movesCooldown2 < 4)) {
            console.log('\The action is blocked.');
            hit = readlineSync.question('--> ');
            hit = parseInt(hit);
        }

//откат навыка игрока

        if ((movesCooldown0 > 0 && movesCooldown1 < 4) || (movesCooldown0 == 0))  {
            movesCooldown0++;
        } else if ( movesCooldown0 == 4) {
            movesCooldown0 = 0;
        }

        if ((movesCooldown1 >= 0 && movesCooldown1 < 3) || (movesCooldown0 == 0)){
            movesCooldown1++;
        } else if (movesCooldown1 == 3) {
            movesCooldown1 = 0;
        }

        if ((movesCooldown2 >= 0 && movesCooldown2 < 4) || (movesCooldown0 == 0)) {
            movesCooldown2++;
        } else if (movesCooldown2 == 4) {
            movesCooldown3 = 0;
        }

        // подсчет здоровья, после удара противника и игрока
        
        moves.maxHealth = moves.maxHealth - (monster.moves[random].physicalDmg - (moves.moves[hit-1].physicArmorPercents / 100 * monster.moves[random].physicalDmg )) - (monster.moves[random].magicDmg - (moves.moves[hit-1].magicArmorPercents / 100 * monster.moves[random].magicDmg));
        monster.maxHealth = monster.maxHealth - (moves.moves[hit-1].physicalDmg - (monster.moves[random].physicArmorPercents / 100 * moves.moves[hit-1].physicalDmg)) - (moves.moves[hit-1].magicDmg - (monster.moves[random].magicArmorPercents / 100 * moves.moves[hit-1].magicDmg));
    
	// выводи здоровье игрока и противника

        if (moves.maxHealth > 0) {
            console.log('\nYour health: ' +moves.maxHealth.toFixed(1));
        }
        if (monster.maxHealth > 0) {
            console.log('\nEnemy health: ' + monster.maxHealth.toFixed(1));
        }
    
    }

// Результат игры

    if (monster.maxHealth < moves.maxHealth) {
        console.log('\n\nYou won!');
    } else {
        console.log('\n\nYou lost.');
    }
}

// запуск функции

start();