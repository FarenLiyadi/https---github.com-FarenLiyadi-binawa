const CurrencyFormat = (
    value,
    locale = "id-ID",
    options = { style: "currency", currency: "IDR" }
) => {
    const formatter = new Intl.NumberFormat(locale, options);

    return formatter.format(value);
};

export default CurrencyFormat;
