export const parseMoney = (mount: number = 0, with_sign?: boolean) => {

    const formattedAmount = mount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    (with_sign) 
    ? `$ ${ formattedAmount }`
    : formattedAmount
}