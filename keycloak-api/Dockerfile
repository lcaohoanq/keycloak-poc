FROM python:3.12-slim

WORKDIR /app

COPY . /app

RUN pip install poetry==1.7.1
RUN poetry install

EXPOSE 4000

# Run app.py directly instead of as a module
CMD ["poetry", "run", "python", "app.py", "-p", "4000"]