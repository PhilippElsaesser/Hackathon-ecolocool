const nextDay = () => ({
    type: 'NEXT_DAY'
});

const resetDay = () => ({
    type: 'RESET_DAY'
})

const incrementPaysage = () => ({
    type: 'INCREMENT_PAYSAGE'
})

const incrementFleur = () => ({
    type: 'INCREMENT_FLEUR'
})

const decrementFleur = () => ({
    type: 'DECREMENT_FLEUR'
})

export { nextDay, resetDay, incrementPaysage, incrementFleur, decrementFleur };