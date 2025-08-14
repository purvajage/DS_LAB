# 📚 Practical 4 – Decision Tree Classifier

## 🎯 Aim
Implement Decision Tree classifier models to perform supervised classification and evaluate model performance.

---

## 📝 Tasks Overview

### **Task 1: Titanic Survival Prediction (Full Stack)**
- **Goal:** Predict passenger survival using the Titanic dataset.
- **Approach:** Full-stack application with backend model and optional frontend interface.
- **Dataset:** `titanic.csv`

**Steps Implemented:**
1. **Data Loading & Preprocessing:** Handle missing values, encode categorical variables.
2. **Model Training:** Train a `DecisionTreeClassifier` on the Titanic dataset.
3. **Model Evaluation:** Evaluate using accuracy, confusion matrix, and classification report.
4. **API Exposure:** Expose prediction API via **Flask** backend.
5. **(Optional) Frontend:** UI for passenger input and prediction display.

**Folder Structure:**
```
backend/
│ app.py                   # Flask backend server
│ decision_tree_model.py   # Model training & prediction logic
│ exp4_titanic.ipynb       # Jupyter Notebook for Titanic analysis
│ titanic.csv              # Titanic dataset
frontend/
│ ... (frontend code if implemented)
```

---

### **Task 2: Company Data Decision Tree (Standalone Notebook)**
- **Goal:** Perform Decision Tree classification on company dataset.
- **Approach:** Implemented entirely in a Jupyter Notebook.
- **Dataset:** `ds_practical4.csv`

**Steps Implemented:**
1. Load dataset in Pandas.
2. Perform exploratory data analysis.
3. Encode categorical variables where needed.
4. Train and test `DecisionTreeClassifier`.
5. Evaluate using accuracy and other metrics.

**File:**
```
CompanyData.ipynb
```

---

## 📊 Datasets

- **Titanic Dataset (`titanic.csv`)**: Passenger details with survival labels.
- **Company Data (`ds_practical4.csv`)**: Company-related attributes for classification.

---

## ⚙️ Technologies Used

- **Python 3**
- **Pandas**, **NumPy**
- **Matplotlib**, **Seaborn**
- **Scikit-learn** (Decision Tree Classifier)
- **Flask** (Backend API for Titanic prediction)
- **(Optional)** HTML/CSS/JS (Frontend UI)

---

## 🚀 How to Run

### **Task 1: Titanic Survival Prediction**

#### Run via Notebook
```bash
jupyter notebook backend/exp4_titanic.ipynb
```

#### Run Backend API
```bash
cd backend
python app.py
```

### **Task 2: Company Data**

```bash
jupyter notebook CompanyData.ipynb
```

---

## 📂 Notes

- Ensure required Python packages are installed (`pip install -r requirements.txt`)
- For Titanic API, send POST requests with passenger details for predictions.
- Frontend implementation is optional; backend API works standalone.

---