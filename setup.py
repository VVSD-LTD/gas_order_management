from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in gas_order_management/__init__.py
from gas_order_management import __version__ as version

setup(
	name="gas_order_management",
	version=version,
	description="Order and Sales of Gas Cylinder Management",
	author="VV Systems Developer Ltd",
	author_email="vimalrathod@vvsdtz.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
