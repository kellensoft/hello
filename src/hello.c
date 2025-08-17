#include <stdio.h>
#include <libintl.h>
#include <locale.h>
#include <string.h>

#define _(String) gettext(String)

int main(int argc, char *argv[]) {
    setlocale(LC_ALL, "");
    bindtextdomain("hello", "./bin/share/locale");
    textdomain("hello");
    const char *name = "World";
    if (argc > 1 && strlen(argv[1]) > 0) {
        name = argv[1];
    }
    printf(_("Hello, %s!\n"), name);
    return 0;
}
