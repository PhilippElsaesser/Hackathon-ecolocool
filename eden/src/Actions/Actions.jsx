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

const isOpen = () => ({
    type: 'IS_OPEN'
})

const isClosed = () => ({
    type: 'IS_CLOSED'
})

export { nextDay, resetDay, incrementPaysage, incrementFleur, decrementFleur, isOpen, isClosed };