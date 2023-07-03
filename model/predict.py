import pickle
from train import WordTransformer

class Predict:
    def __init__(self, model_path, pipeline_path):

        with open(model_path, 'rb') as m, open(pipeline_path, 'rb') as p:
            self.model = pickle.load(m)
            self.pipeline = pickle.load(p)

    def pred(self, x):
        x = self.pipeline.transform(x)
        return self.model.predict(x)
