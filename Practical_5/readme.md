# Logistic Regression for Multi-Class Classification

This repository demonstrates how to use **Logistic Regression** for multi-class classification tasks using two popular datasets:

- **Digit Dataset** (Handwritten digits 0–9 from sklearn)
- **Iris Dataset** (Flower classification from sklearn)

---

## 📘 Digit Dataset (Handwritten Digits)

The **Digits Dataset** consists of **1,797 images** of hand-written digits.  
Each image is **8x8 pixels** (grayscale), flattened into a feature vector of length **64**.

### Objective

- Train a Logistic Regression model to classify handwritten digits (0–9).
- Evaluate performance using accuracy score.

### Workflow

1. Load dataset from `sklearn.datasets.load_digits`.
2. Flatten each 8x8 image into a feature vector (64 features).
3. Split dataset into training and testing sets.
4. Train Logistic Regression model.
5. Evaluate accuracy on test set.
6. Visualize sample predictions.

---

## 🌸 Iris Dataset (Flower Classification)

The **Iris Dataset** contains **150 samples** with 4 numerical features:

- Sepal Length
- Sepal Width
- Petal Length
- Petal Width

The dataset has **3 classes**:

- Setosa
- Versicolour
- Virginica

### Objective

- Train a Logistic Regression model to classify iris flowers into one of the 3 species.
- Evaluate accuracy and test predictions.

### Workflow

1. Load dataset from `sklearn.datasets.load_iris`.
2. Split dataset into training and testing sets.
3. Train Logistic Regression model on training data.
4. Predict labels for test data.
5. Evaluate using accuracy score.
6. Test predictions on sample inputs.

---

## ⚙️ Requirements

Install dependencies before running notebooks:

```bash
pip install numpy pandas matplotlib scikit-learn
```

---

## 📂 Files

- `Digit_Dataset.ipynb` — Logistic Regression on handwritten digits.
- `Iris_Dataset.ipynb` — Logistic Regression on iris dataset.
- `README.md` — Project documentation.

---

## 🚀 Running the Code

1. **Clone the repository or download the files.**
2. **Open Jupyter Notebook:**

    ```bash
    jupyter notebook
    ```

3. **Run `Digit_Dataset.ipynb` or `Iris_Dataset.ipynb`.**

---