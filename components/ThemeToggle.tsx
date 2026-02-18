'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark');
        } else {
            setIsDark(false);
            document.body.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        // Dispatch event for other components (like video) to react
        window.dispatchEvent(new Event('theme-change'));
    };

    if (!mounted) return <button className="dark-toggle" style={{ width: '20px' }} />;

    return (
        <button className="dark-toggle" onClick={toggleDarkMode}>
            <img
                id="darkIcon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEpSURBVEiJrdVNKwVRHMfxD7HhZkN52Cu5SJbWslJeAAtWFhbKq7CSjRcgO3kNwjsgNrLARjcLKaU8NBZzh9t0r5k5zr9+TZ3OfL/nqXMorgn0luhXuRZxjgQrMcE92GmCs9Rjwfv9jjrLSyx4F45z8ARXsQRbbeAJLmPAa2h0EDRiCLY7wLOMhoK7m9/lgn5LoQLow4e/Z3AhPQRBNV4Az7IeKpgvKXjGZIhguqQgwX2IZKiCIJvJmop7cltRkm38Bsba8GawquUW3gsQtOYJ19Jr5bWl/Wc5p/D1T0k+p/lpHUYWLOQFI3iIBN/Pw7Oay61hSM4UPLGzuAuEH0kfrcIaxgE+S4Ib2BRwX9Wxi5s20HecSB+qWidAFeOg9CAMNEf8iLein74BA4PvMgalmPkAAAAASUVORK5CYII="
                alt="Light Mode"
                style={{ width: '24px', display: isDark ? 'none' : 'block' }}
            />
            <img
                id="lightIcon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO3d+4tVVRTA8VOWWklEKlRUlBSplJnlj9kQEQg9fioKgkhLkaSRTEN6SpFEEVgShIKU1Q8SET2gn6KURCWmMizxhTajhZZWCkVj842V64fL2Mw9c88+Z+3X5w+Yu9dZc+/Zj7X3Loosy7Isy7IscsAM4FXgZ+AAcJt1m5IDjAXmA9s4Va91+5IBnAs8DvzE0Pqs2xk94AzgYeAw7S2wbm/UgFuB7ZSzETjdus0x/zy9AQyUTMZfwFTrdkcJ6AL2MTJPWLc7OsBpwBLgxAiTsQM407r9UQHGAevpzN3W7Y8KMAHY2mEyeuSbZR1DNIALhxjglXWvdQzRAC7p4OXdqje/OxwBJgI/UM1T1nHENMb4qmIyZHwyyTqWWLq271HdJutYoiADONx4zDqWWOal/nGUkBnW8QQNOE97RS78micRKwLexp1PqrYnacAduPWydUzBAkYDOx0nZK51XMGS3hDu3WQdV5CA8cBvNSTkWuvYggQ8Qz0ut44tOMA5wC81JWSidXzBAR6hPhdYxxecimsc7VxhHV9QgJnU6zrrGIMCrKo5IV3WMYY2vS5Fz3WaYx1nMIAbqN+L1nEGA3i6gYR8YB1nMIANDSRkr3WcQQBGAcdpxmXW8XoPuIbmPGAdr/eA+xtMyDrreL0HPN9gQmQW+SzrmFNapi3jLuuYvaY7mJr0kXXMXgP2NJyQfuBS67i9pXvFm/aaddzeAv4wSMifsqXBOnYv6U+IhVesY/eS7oS10A9Ms47fOyU39tdlY97aZt/LGixPp7QCvsXWcWCK9XPwBvA59rblKRUFrMEPb+b3ycmELMUfK4rUAXfil0eLlAGT8csAsKhIfAn3CP5Zmew7RSpC8NNbSfa+ai6ydtElnlyEU3A4X4sOOz9tFbgavx2TLXE+/4QBV/1POVVflczux38bpEqm8IgcpAM8qUsKgx2s8odfIAz9+sI3XU+RPffAPW02x66MqfvbjvxHvt508Z3uUL4P+KZtC2F61Q/bQnj65VAC/W+trUcmG460BrqvZLt6XHyo9BBC9jvwLvBg1WOgdHw2U0/l3mKyL1/PZz9IPPYBHwIvAQ8BtwDXA1fqMYWyBXySXg5wMzBPlpaBT4GjFT5XvkWjKydEk7LY4QNJ1WInyWjZGm25rBs6Kasa5ywhmhQ5GDnrzDynyWi52aDOLdKxkq7wKOcJaTnLveyh+hn/Pauu2CrjQ7aq1mS0nNNbdiCUsj3OX+TDJGWWYblpCOTZ3NhIMmo4JjZG3Y0mo2Vm82PryD30TuPJGDRg3Gz9BDzyJXC2WUI0KTL38731k/DAd8D5hQ9kOxrwI+nabb04dgrgokRH8tuBiwsfyVdWf0dTsVWueSp8pi/6FHpf6yXWIgRasdIN/E18TgDP+lx+NCQZrUY2zdIrK4xFBFfprYtglnitXNVRxEKn7steTuwTuX10dhEjreiTQ/0P4b8jsgUiiev8tCfW7fCmHpcO6Uvbj1F3k4AxWmazGXtfAwuS3OowTKX4cxVvDB2pA1oTnE/YHg4wFVgIvK8Xh7msYvwMWCY1tkGOJaxxct1Fqgpv1w7Bat1H36PLpIe1yHpAX8RSZbkL+EK3VS/XQugp+Ua4LMuyLMuyIkH/AvNzz2/IxHhaAAAAAElFTkSuQmCC"
                alt="Dark Mode"
                style={{ width: '24px', display: isDark ? 'block' : 'none' }}
            />
        </button>
    );
}
