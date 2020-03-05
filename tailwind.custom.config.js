/**
 * 1 to 100 percent height
 */
const intPercentageHeight = {}

for (let i = 1; i <= 100; i++) {
  intPercentageHeight[`${i}p`] = `${i}%`
}

/**
 * 1 to 100 vh height
 */
const intViewHeight = {}

for (let i = 1; i <= 100; i++) {
  intViewHeight[`${i}vh`] = `${i}vh`
}

/**
 * 1 to 100 percent margin
 */
const intPercentageViewMargin = {}
for (let i = 1; i <= 100; i++) {
  intPercentageViewMargin[`${i}vh`] = `${i}vh`
}

module.exports = {
  intPercentageHeight,
  intViewHeight,
  intPercentageViewMargin,
}