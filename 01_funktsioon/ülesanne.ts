function calculateLoudnessRatio(dB1: number, dB2: number): number {
    // Detsibellide erinevuse suhte leidmine järgmise valemiga: 10^((dB1 - dB2) / 10)
    const ratio = Math.pow(10, (dB1 - dB2) / 10);
    return ratio;
}

function compareDecibels(dB1: number, dB2: number): void {
    const ratio = calculateLoudnessRatio(dB1, dB2);

    if (ratio > 1) {
        console.log(`${dB1} dB on ${ratio.toFixed(2)} korda valjem kui ${dB2} dB.`);
    } else if (ratio < 1) {
        console.log(`${dB1} dB on ${(1 / ratio).toFixed(2)} korda vaiksem kui ${dB2} dB.`);
    } else {
        console.log(`${dB1} dB on sama vali kui ${dB2} dB.`);
    }
}

// Näide:
const dB1 = 80; // Esimese võrreldava väärtus
const dB2 = 70; // Teise võrreldava väärtus

compareDecibels(dB1, dB2);