# from bs4 import BeautifulSoup
from selenium import webdriver
from pyvirtualdisplay import Display
import time
from selenium.webdriver.common.by import By

url = "https://mypracticecares-qa.kiwi-internal.com/"
# display = Display(visible=1, size=(800, 600))
# display.start()
driver = webdriver.Firefox()
driver.get(url)
driver.find_element(By.XPATH, "//*[@id=\"login\"]/a").click()
time.sleep(2)
el = driver.find_element(By.ID, "fancy_login_login_box")
driver.find_element(By.ID, "edit-name").send_keys("admin")
driver.find_element(By.ID, "edit-pass").send_keys("admin@123")
# driver.find_element_by_class_name("button js-form-submit form-submit").click()
driver.find_element(By.NAME, "op").click()
# el.find_element(By.ID, "edit-submit-1624717310").click()
time.sleep(1)
driver.quit()