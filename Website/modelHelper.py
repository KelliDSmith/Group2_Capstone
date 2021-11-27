import pandas as pd
import datetime
import time
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(gender, age, seniority, jobTitle, dpt):
        features_np = ['Gender', 'Age', 'Seniority', 'JobTitle_Data Scientist',
            'JobTitle_Driver', 'JobTitle_Financial Analyst',
            'JobTitle_Graphic Designer', 'JobTitle_IT', 'JobTitle_Manager',
            'JobTitle_Marketing Associate', 'JobTitle_Sales Associate',
            'JobTitle_Software Engineer', 'JobTitle_Warehouse Associate',
            'Dept_Administration', 'Dept_Engineering', 'Dept_Management',
            'Dept_Operations', 'Dept_Sales']
            
        user_input = np.zeros(len(features_np))
        user_input2 = np.zeros(len(features_np))
        
        job_idx = features_np.index(f'JobTitle_{jobTitle}')
        dept_idx = features_np.index(f'Dept_{dpt}')


        user_input[0] = gender
        user_input[1] = age
        user_input[2] = seniority
        user_input[job_idx] = 1
        user_input[dept_idx] = 1

        user_input2[0] = 1 if gender == 0 else 0
        user_input2[1] = age
        user_input2[2] = seniority
        user_input2[job_idx] = 1
        user_input2[dept_idx] = 1
        
        filename = 'finalized_model2.sav'
        reg_load = pickle.load(open(filename, 'rb'))
        
        preds = reg_load.predict([user_input, user_input2])
        return preds