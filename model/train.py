import pandas as pd
import numpy as np
import pickle as pk
import sys

from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

import nltk
nltk.download('stopwords')
nltk.download('punkt')

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

class WordTransformer(BaseEstimator, TransformerMixin):
    
    stp_en = stopwords.words('english')
    func = np.frompyfunc(lambda _: WordTransformer._apply(_), 1, 1)

    def __init__(self):
        pass
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X, y=None):
        return X.apply(self.func)
    
    @staticmethod
    def _apply(s):
        tokens = word_tokenize(s.lower(), 'english')
        l = []
        for i in tokens:
            if i not in WordTransformer.stp_en:
                l.append(i)
        return ' '.join(l)


#todo
overall_pipeline = Pipeline([
    ('tokenize_stopwords', WordTransformer()),
    ('tfidf', TfidfVectorizer())
])

def main(data: str, logging=True, encoding='utf-8'):
    data = pd.read_csv(data, encoding=encoding)
    y = data.v1

    X = overall_pipeline.fit_transform(data.v2)

    params = {
        'n_estimators': [10, 100, 250, 500, 1000, 2500, 5000],
        'max_depth': [None, 10, 50, 100, 250],
    }

    classifier = GridSearchCV(RandomForestClassifier(), param_grid=params, n_jobs=-1)
    classifier.fit(X, y)

    with open('model.bin', 'wb') as file:
        pk.dump(classifier.best_estimator_, file)
    
    with open('pipeline.bin', 'wb') as file:
        pk.dump(overall_pipeline, file)
    #implement logging here

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], 'ISO-8859-1')
    #data path, whether loggin enabled or not, encoding
