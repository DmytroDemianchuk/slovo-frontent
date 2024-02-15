import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      inputFile: null,
      outputFile: null,
      selectedInputColumn: null,
      selectedOutputColumn: null,
      columnPairs: [],
      selectedSheets: [],
      header: [],
      settingInput: {},
    };
  },
  mutations: {
    setSettingInput(state, settingInput){
      state.settingInput = settingInput
    },
    setHeader(state, header){
      state.header = header
    },
    setSelectedSheets(state, selectedSheets){
      state.selectedSheets = selectedSheets
    },
    setInputFile(state, file) {
      state.inputFile = file;
    },
    setOutputFile(state, file) {
      state.outputFile = file;
    },
    setInputColumn(state, column) {
      state.selectedInputColumn = column;
    },
    setOutputColumn(state, column) {
      state.selectedOutputColumn = column;
    },
    addColumnPair(state) {

      if (state.selectedInputColumn && state.selectedOutputColumn) {
        const color = getRandomColor();
        state.columnPairs.push({
            input: { ...state.selectedInputColumn, color: color },
            output: { ...state.selectedOutputColumn, color: color },
        });

        state.selectedInputColumn = null;
        state.selectedOutputColumn = null;
      }
    },
  },
  actions: {
    selectInputColumn({ commit, state }, column) {
      commit('setInputColumn', column);
      if (state.selectedOutputColumn) {
        commit('addColumnPair');
      }
    },
    selectOutputColumn({ commit, state }, column) {
      commit('setOutputColumn', column);
      if (state.selectedInputColumn) {
        commit('addColumnPair');
      }
    },
  },
});

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360); 
  const saturation = Math.floor(Math.random() * 100); 
  const lightness = Math.floor(Math.random() * 40) + 50; 
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

