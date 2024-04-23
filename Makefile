BUNDLE_PATH = "caffeine@patapon.info.zip"
EXTENSION_DIR = "caffeine@patapon.info"

all: build install

.PHONY: build install clean translations lint lint-fix

build:
	rm -f $(BUNDLE_PATH)
	cd $(EXTENSION_DIR); \
	gnome-extensions pack --force --podir=locale \
	                      --extra-source=preferences/ \
	                      --extra-source=icons/; \
	mv $(EXTENSION_DIR).shell-extension.zip ../$(BUNDLE_PATH)

install:
	gnome-extensions install $(BUNDLE_PATH) --force

clean:
	@rm -fv $(BUNDLE_PATH)
	@rm -fv $(EXTENSION_DIR)/schemas/gschemas.compiled

translations:
	@./update-locale.sh

lint:
	eslint -c .eslint.config.js $(EXTENSION_DIR)

lint-fix:
	eslint -c .eslint.config.js --fix $(EXTENSION_DIR)
