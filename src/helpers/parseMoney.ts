export const parseMoney = (mount: number = 0) => {

    const formattedAmount = mount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    console.log(formattedAmount)

    return formattedAmount
}