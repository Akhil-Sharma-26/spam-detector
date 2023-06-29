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

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

#todo
overall_pipeline = Pipeline([

])

def main(data: str, logging=True):
    data = pd.read_csv(data)
    y = data.v2

    X = overall_pipeline.fit_transform(X)

    params = {
        'n_estimators': [10, 100, 250, 500, 1000, 2500, 5000],
        'max_depth': [None, 10, 50, 100, 250],
    }

    classifier = GridSearchCV(RandomForestClassifier(), param_grid=params)
    classifier.fit(X, y)

    with open('model.bin', 'wb') as file:
        pk.dump(classifier.best_estimator_, file)
    
    with open('pipeline.bin', 'wb') as file:
        pk.dump(overall_pipeline, file)
    #implement logging here

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
    #data path, whether loggin enabled or not
