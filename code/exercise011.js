function boilingTime(eggs) {
    const eggsPerBatch = 8;
    const timePerBatch = 5;

    if (eggs === 0) return 0;

    const batches = Math.ceil(eggs / eggsPerBatch);
    return batches * timePerBatch;
}