# Logistic Regression for Binary Classification 🧑‍💻

This project demonstrates the application of **Logistic Regression** for binary classification problems using machine learning.  
We use **three distinct datasets** to explore different problem domains, train logistic regression models, and evaluate their performance using appropriate metrics.

---

## 🎯 Project Goal

The primary objective is to **build and evaluate predictive models** for binary outcomes using logistic regression.  
Each Jupyter Notebook in this repository tackles a different real-world problem:

- **Diabetes Prediction**: Predict the onset of diabetes based on diagnostic medical measurements.
- **Employee Retention**: Predict whether a valuable employee will leave the company.
- **Insurance Purchase**: Predict if a customer will purchase an insurance product.

---

## 📂 Datasets Used

This project utilizes three datasets to showcase the versatility of logistic regression:

1. **Pima Indians Diabetes Dataset**
   - **Goal**: Predict whether a patient has diabetes.
   - **Source**: [Kaggle](https://www.kaggle.com/)

2. **HR Analytics - Employee Retention**
   - **Goal**: Predict whether an employee will leave the company.
   - **Source**: [Kaggle](https://www.kaggle.com/)

3. **Insurance Dataset**
   - **Goal**: Predict whether a customer will purchase a specific insurance policy.
   - **Source**: Provided privately (see `Insurance.ipynb`).

---

## 🗂️ Project Structure

The repository is organized as follows, with each notebook dedicated to a specific dataset:

```
.
├── Diabetes.ipynb         # Logistic Regression on the Diabetes dataset
├── Emp_Retention.ipynb    # Logistic Regression on the Employee Retention dataset
├── Insurance.ipynb        # Logistic Regression on the Insurance dataset
└── README.md              # Project documentation
```

---

## ⚙️ Requirements & Installation

To run the notebooks in this project, you need **Python** and the following libraries.

### 1️⃣ Clone the repository

```bash
git clone <your-repository-url>
cd <repository-directory>
```

### 2️⃣ Install the required packages

Make sure you have pip installed.  
Then, run the following command in your terminal:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn jupyter
```

---

## 🚀 Getting Started

1. **Launch Jupyter Notebook**  
   In your terminal, run:
   ```bash
   jupyter notebook
   ```
2. **Open a Notebook**  
   Select any of the `.ipynb` files to start exploring and running the code.

---

## 📊 Results & Evaluation

Each notebook includes:
- Exploratory Data Analysis (EDA)
- Data Preprocessing
- Model Training (Logistic Regression)
- Model Evaluation (Accuracy, Confusion Matrix)
