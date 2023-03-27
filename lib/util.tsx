let format = (n: string | number) => {
    return ("00" + n).slice(-2);
}

export { format };
