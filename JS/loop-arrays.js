const populations = []; 
    const WORLD_POPULATION = 7900;
    
    const percentageOfWorld = (population) => (population / WORLD_POPULATION) * 100;
    
    const populationPercentages = (populationArr) => {
        const percentages = [];
        for (let item of populationArr) {
            percentages.push(percentageOfWorld(item));
        }
        return percentages;
    };
    
    console.log(populationPercentages(populations));