const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.cloud.google.com/dicoding-storage-cancer/model.json');
}
module.exports = loadModel;