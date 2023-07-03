## Random forest classifier with gridsearch 

train.py fits the model and the pipeline and outputs the bin files. For now these are just dumped using pickle.

The fitting takes a good while (~12 mins) on my 12-core processor so to make up for the worse hosting hardware itll be refitted only once a week or so

predict.py is wip rn. It exposes the api to call the model for predictions.