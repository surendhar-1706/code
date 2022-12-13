# specify the base image
FROM python:3

# copy the requirements file
COPY requirements.txt /app/

# install the dependencies
RUN pip install -r /app/requirements.txt

# copy the rest of the code
COPY . /app

# set the working directory
WORKDIR /app

# specify the command to run the app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
