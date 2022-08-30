class schoolSports{
    constructor (sport, player){
        this.sport = sport;
        this.player = player;
    }
    describe() {
    return `${this.sport} has ${this.player} on the team.`;
    }
}

class Sport {
    constructor(name){
        this.name=name
    }
    addSport(sport){
        if(sport instanceof Sport){
            this.sport.push(sport);
        } else{
            throw new Error(`You can only add an instance of Sport. Arguement is not a sport: ${sport}`);
        }
    }

    describe(){
        return `${this.name} has ${this.player.length} on team.`;
    }
}

class Menu {
    constructor(){
        this.sport = [];
        this.selectedSport = null;
    }
    start(){
        let selection = this.showMainMenuOptions();

        while( selection != 0){
            switch(selection){
                case '1':
                    this.createSport
                    break;
                case '2':
                    this.viewSport();
                    break;
                case '3':
                    this.deleteSport();
                    break;
                case '4':
                    this.displaySport();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new sport
        2) view sport
        3) delete sport
        4) display all sport
        `);
    }

    showSportMenuOptions(sportInfo) {
        return prompt(`
        0) back
        1) create player
        2) delete player
        ------------
        ${sportInfo}
        `);
    }

    displaySport() {
        let sportString = '';
        for (let i = 0; i < this.sport.length; i++){
            sportString += i + ') ' + this.sport[i].name + '\n';
        }
        alert(sportString);
    }

    createSport() {
        let name = prompt('Enter name for new sport:');
        this.sport.push(new Sport(name));
    }

    viewSport() {
        let index = prompt('Enter the index of the sport you wish to view.');
        if (index >  -1 && index < this.sport.length) {
            this.selectedSport = this.sport[index];
            let description = 'Sport Name ' + this.selectedSport.name + '\n';
            for(let i = 0; i < this.selectedSport.player.length; i ++) {
                description += i + ') ' + this.selectedSport.player[i].name +
                 ' - ' + this.selectedSport.player[i].player + '\n';
            }
            let selection = this.showSportMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createSport();
                    break;
                case '2':
                    this.deleteSport();
            }
        }
    }
}

let menu = new Menu();
menu.start();