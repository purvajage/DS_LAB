# Practical 6 - Naive Bayes for Classification

## 📌 Objective
Apply the **Naive Bayes machine learning algorithm** for classification tasks on multiple datasets and evaluate performance using **accuracy, precision, and recall**.

---

## 📂 Project Structure
```
Practical_6/
│── Datasets/
│   ├── email_dataset.csv
│   ├── reviews.csv
│   ├── spam - spam.csv
│   ├── titanic - titanic.csv
│
│── Movie_Review_Sentiment_Classification.ipynb
│── Phishing_Detection.ipynb
│── Spam_Filter.ipynb
│── Titanic_NB.ipynb
│── readme.md
```

---

## 📊 Datasets Used
1. **Spam Email Dataset** (`spam - spam.csv`)  
   - Goal: Classify emails as *spam* or *ham (not spam)*.

2. **Phishing Email Dataset** (`email_dataset.csv`)  
   - Goal: Detect whether an email is *phishing* or *legitimate*.

3. **Movie Reviews Dataset** (`reviews.csv`)  
   - Goal: Classify movie reviews as *positive* or *negative* sentiment.

4. **Titanic Dataset** (`titanic - titanic.csv`)  
   - Goal: Predict survival (`survived` or `not survived`) of Titanic passengers.

---

## 🧑‍💻 Implementations
Each Jupyter Notebook applies **Naive Bayes Classification** on a dataset:

1. **Spam_Filter.ipynb**  
   - Detects spam vs ham emails.  

2. **Phishing_Detection.ipynb**  
   - Identifies phishing vs legitimate emails.  

3. **Movie_Review_Sentiment_Classification.ipynb**  
   - Sentiment analysis of movie reviews.  

4. **Titanic_NB.ipynb**  
   - Predicts passenger survival using Titanic dataset.  

---

## ⚙️ Steps Followed
1. **Data Preprocessing**  
   - Handle missing values  
   - Encode categorical variables  
   - Tokenize text data (for NLP tasks)  

2. **Train-Test Split**  

3. **Apply Naive Bayes Classifier**  
   - `MultinomialNB` (for text classification)  
   - `GaussianNB` (for numeric data like Titanic dataset)  

4. **Model Evaluation**  
   - **Accuracy** = Correct predictions / Total predictions  
   - **Precision** = True Positives / (True Positives + False Positives)  
   - **Recall** = True Positives / (True Positives + False Negatives)  

---

## 🛠️ Requirements
- Python 3.x  
- Jupyter Notebook  
- Libraries:  
  ```bash
  pip install numpy pandas scikit-learn
  ```