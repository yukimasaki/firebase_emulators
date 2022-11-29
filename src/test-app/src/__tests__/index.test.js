test('0を渡すとtrueを返す', () => {
    function isZero(value) {
        return value == 0
    }

    const result = isZero(0)
    expect(result).toBe(true)
})