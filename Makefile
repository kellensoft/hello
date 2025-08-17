CC = gcc
CFLAGS = -Wall -Wextra -std=c99
LDFLAGS = 
SRCDIR = src
BINDIR = bin
LOCALEDIR = $(BINDIR)/share/locale
TARGET = $(BINDIR)/hello

SOURCES = $(SRCDIR)/hello.c
OBJECTS = $(SOURCES:.c=.o)

POFILES = $(wildcard $(SRCDIR)/locales/*.po)
MOFILES = $(POFILES:$(SRCDIR)/locales/%.po=$(LOCALEDIR)/%/LC_MESSAGES/hello.mo)

.PHONY: all clean install locales

all: $(TARGET) locales

$(TARGET): $(OBJECTS) | $(BINDIR)
	$(CC) $(OBJECTS) -o $@ $(LDFLAGS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

$(BINDIR):
	mkdir -p $(BINDIR)

locales: $(MOFILES)

$(LOCALEDIR)/%/LC_MESSAGES/hello.mo: $(SRCDIR)/locales/%.po
	@mkdir -p $(dir $@)
	msgfmt $< -o $@

clean:
	rm -rf $(BINDIR)
	rm -f $(SRCDIR)/*.o

install: all
	@echo "Install target not implemented yet"

.SUFFIXES: .c .o .po .mo