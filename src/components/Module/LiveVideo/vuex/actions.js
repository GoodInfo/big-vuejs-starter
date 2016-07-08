export const nextStep = ({ dispatch, state }) => {
  if (state.liveVideo.step > 5) {
    dispatch('LIVEVIDEO/SET_STEP', 0)
  } else {
    dispatch('LIVEVIDEO/SET_STEP', state.liveVideo.step + 1)
  }
}
