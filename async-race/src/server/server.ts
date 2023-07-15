export type Car = {
    "name": string,
    "color": string,
    "id": number
}

export type Winner = {
    "id": number,
    "wins": number,
    "time": number
}

export type Answer = {
    "velocity": number,
    "distance": number
}

export async function getCar (i:number): Promise<Car> {
    const data = await fetch (`http://127.0.0.1:3000/garage/${i}`);
    const car = await data.json();
    return car;
}

export async function getCars (): Promise<Car[]> {
    const data = await fetch ('http://127.0.0.1:3000/garage');
    const cars = await data.json();
    return cars;
}

export async function getWinners (): Promise<Winner[]> {
    const data = await fetch ('http://127.0.0.1:3000/winners');
    const winners = await data.json();
    return winners;
}

export async function createCar(car: Car): Promise<void> {
    await fetch ('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
}

export async function deleteCar (i:number): Promise<void> {
    await fetch (`http://127.0.0.1:3000/garage/${i}`, {
        method: 'DELETE'
    })
}

export async function deleteWinner (i:number): Promise<void> {
    await fetch (`http://127.0.0.1:3000/winners/${i}`, {
        method: 'DELETE'
    })
}

export async function updateCar (i: number, car: Car): Promise<void> {
    await fetch (`http://127.0.0.1:3000/garage/${i}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
}

export async function startStopCar (status: string, id: number): Promise<Answer> {
    const response = await fetch (`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
        method: 'PATCH'
    })
    const answer = await response.json();
    return answer;
}    