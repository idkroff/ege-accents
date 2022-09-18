import glossary from './glossary.json';

const zeroStats = () => {
    return {
        misstakes: [],
        solutionTime: [],
        wordCount: {
            correct: 0,
            wrong: 0
        }
    };
};

export default class StorageInterface {
    #wordTypes = glossary.wordTypes;
    get wordTypes() { 
        return this.#wordTypes; 
    }

    #allTasks = glossary.tasks;
    get allTasks() { 
        return this.#allTasks;
    }

    getCurrentWordTypes() {
        try {
            const currentWordTypes = JSON.parse(localStorage.getItem('currentWordTypes'));
            if (!currentWordTypes) throw new Error('Incorrect Wordtypes');
            return currentWordTypes;
        } catch(e) {
            localStorage.setItem('currentWordTypes', JSON.stringify(this.#wordTypes));
            return this.#wordTypes;
        }
    }

    setCurrentWordTypes(wordTypes) {
        localStorage.setItem('currentWordTypes', JSON.stringify(wordTypes));
    }

    getTasksPassed() {
        try {
            const tasksPassed = new Set(JSON.parse(localStorage.getItem('tasksPassed')));
            if (!tasksPassed) throw new Error('Incorrect tasks passed');
            return tasksPassed;
        } catch(e) {
            localStorage.setItem('tasksPassed', '[]');
            return new Set();
        }
    }

    getStats() {
        let statsData;
        try {
            statsData = JSON.parse(localStorage.getItem('stats'));
            if (!statsData) throw new Error('Incorrect stats data');
        } catch(e) {
            console.error(e)
            statsData = zeroStats();
            localStorage.setItem('stats', JSON.stringify(statsData));
        }
        return statsData;
    }

    getHistoryData() {
        try {
            const historyData = JSON.parse(localStorage.getItem('history'));
            if (!historyData) throw new Error('Incorrect history data');
            return historyData;
        } catch(e) {
            localStorage.setItem('history', '[]');
            return [];
        }
    }

    clearTasksPassed() {
        localStorage.setItem('tasksPassed', '[]');
    }

    setStats(stats) {
        localStorage.setItem('stats', JSON.stringify(
            Object.assign(this.getStats(), stats)
        ));
    }

    setZeroStats() {
        localStorage.setItem('stats', JSON.stringify(zeroStats()));
    }

    addPassedTask(tasks) {
        localStorage.setItem('tasksPassed', JSON.stringify(tasks));
    }

    pushHistory(words) {
        const historyData = this.getHistoryData();
        historyData.push(...words);
        localStorage.setItem('history', JSON.stringify(historyData));
    }

    setHistory(historyData) {
        localStorage.setItem('history', JSON.stringify(historyData));
    }
}